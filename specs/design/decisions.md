# Technical decisions

- \[architecture\] The greeting is a constant in the web app; there is no backend, database or sign-in dependency, because the requirements make the app public and storage-free. *assumed* (F1)
- \[hello-webapp\] The page is served as static files and renders the greeting without any network call. *assumed* (F1)