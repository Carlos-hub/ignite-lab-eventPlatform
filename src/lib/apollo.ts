import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client= new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ohy5du074z01xkd41hh7jm/master',
    cache: new InMemoryCache()
})