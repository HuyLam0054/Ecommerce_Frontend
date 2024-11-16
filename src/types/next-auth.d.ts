declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    idToken?: string;
  }
}
declare module "next-auth" {
  interface Session {
    user: {
      /** The user's postal address. */
      address: string;
    };
  }
}
