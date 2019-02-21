import * as React from "react";
import { Query } from "react-apollo";
import userQuery from "queries/user";

export default function IsLoggedIn({ children }: React.ComponentProps<any>) {
  return (
    <Query query={userQuery}>
      {({ loading, error, data }) => {
        if (loading) return false;
        if (error) return `Error! ${error.message}`;
        if (data.user && data.user.email) {
          return children;
        }
        return false;
      }}
    </Query>
  );
}
