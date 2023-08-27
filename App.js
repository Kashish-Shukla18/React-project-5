import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     */
    return (
        <div>
            <p>
            {messages.length>0 ?`You have ${messages.length} unread message(s)`:"You're all caught up!"}
            </p>
        </div>
    )
