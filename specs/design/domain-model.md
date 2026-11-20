# Domain model

The product holds no stored records. The only data is the fixed greeting message the page shows.

```mermaid
erDiagram
    Greeting {
        string message "Fixed text: Hello, World!"
    }
```