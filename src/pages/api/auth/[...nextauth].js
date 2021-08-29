import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    /**
     * @param  {object} user     User object
     * @param  {object} account  Provider account
     * @param  {object} profile  Provider profile
     * @return {boolean|string}  Return `true` to allow sign in
     *                           Return `false` to deny access
     *                           Return `string` to redirect to (eg.: "/unauthorized")
     */
    async signIn(user, account, profile) {
      console.log(`Called sign in handler with ${JSON.stringify(user)}`);

      const isAllowedToSignIn = true;
      return isAllowedToSignIn;
      // if (isAllowedToSignIn) {
      //   return true;
      // } else {
      //   // Return false to display a default error message
      //   return false;
      //   // Or you can return a URL to redirect to:
      //   // return '/unauthorized'
      // }
    },
  },
});
