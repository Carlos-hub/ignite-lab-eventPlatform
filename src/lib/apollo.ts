import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client= new ApolloClient({
    uri: import.meta.env.VITE_API_URL,
    // headers:{
    //     'Authorization:': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2NTYwMzMyODIsImF1ZCI6WyJodHRwczovL2FwaS1zYS1lYXN0LTEuZ3JhcGhjbXMuY29tL3YyL2NsNG9oeTVkdTA3NHowMXhrZDQxaGg3am0vbWFzdGVyIiwiaHR0cHM6Ly9tYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNzRmOTdmNjUtNGQzYS00Y2NhLThlOGUtMmFkZTdjZjg2ZGE0IiwianRpIjoiY2w0cnJnajJ1MWh0MzAxd2IwMzF0YmhnayJ9.uTsKrJrSrPyyJkm3q2rmPMFvhXFeHcz-6OKY3zuGERhJmdABFlNYsvqEdWxUt8YTR_CpCapcAVYpxaPnhr9xhLjt8ZXklwmEEOXXn_-PkY_chGLenXm1WKlde5KDlscHWfJL5p9lFGOBObmsbcsErvcrPWF1254Tx33h3oFL3BYgI1usK6jXupK9MqP5SZeJyWf8hb1J2GphkFpZNkUh3_m1v01VN8LoqZy9AOXGFGG59flh5rUbtjpo2K4RgAgrT0k3rCuiuhPlOHTdajLRZAMAQCnJIu2G6DeLG8Y5oBGg_CToMnFORKL75couY5kHZBPtfwEb9lC2r3shE26YFYijplsKf7zQzJLW3Xy9w8kcukafdPAue4EWsACezTfd9SRVsZbEPZR4O6QctdUY-mTq6ix81UDIE3Hx7q9hbxuJ9TE-AHMghQn9MsSMX-3YkmsRZlqRnIu9Zn82Kf4Y3ek3Sq2_IybAHohW2x7YuBbiBE5bjfY3yyxFq1BMJ11iV4v7xfF0FP-_MIYKr3G2JAu5S3qZYFwBRnoVvM-M1gx7RjFwg6cQdwuCEzOScLlsE0F4Ualeu81es_skFOLOslhlxSV7yo_9kuS2k6xZewKZqPNn0Awfc-UNRC9nMzmrX4xL37mXJk3Nb7Fx4gnPQYpqZEYKQ95a4PBpjtXjlN8`
    // },
    cache: new InMemoryCache()
})

// ${import.meta.env.VITE_API_ACCESS_TOKEN}

