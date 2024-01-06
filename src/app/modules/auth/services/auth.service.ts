import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi(): void {
    const authConfig: AuthConfig = {
      // Url of the Identity Provider
      issuer: 'https://accounts.google.com',

      // URL of the SPA to redirect the user to after login
      redirectUri: window.location.origin,

      // URL of the SPA to redirect the user after silent refresh
      // silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
      redirectUriAsPostLogoutRedirectUriFallback: true,

      // The SPA's id. The SPA is registerd with this id at the auth-server
      clientId:
        '181164447221-ct01log09jhonbc3rjisf357loi3e3r4.apps.googleusercontent.com',

      strictDiscoveryDocumentValidation: false,

      // set the scope for the permissions the client should request
      // The first three are defined by OIDC. The 4th is a usecase-specific one
      scope: 'openid profile email',

      showDebugInformation: true,

      sessionChecksEnabled: true,
    };

    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login(): void {
    this.oauthService.initImplicitFlow();
  }

  public logout(): void {
    this.oauthService.logOut();
  }

  public get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) {
      return null;
    }
    return claims['given_name'];
  }

  public get isAuthenticated(): boolean {
    return this.oauthService.hasValidIdToken();
  }
}
