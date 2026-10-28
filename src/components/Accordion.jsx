
import { useState } from "react";

function Accordion() {
    const [open, setOpen] = useState(null);

    const items = [
        {
            id: 1,
            title: "What is React?",
            content: "React is a JavaScript library for building user interfaces."
        },
        {
            id: 2,
            title: "What is useState?",
            content: "useState is a React Hook used to manage component state."
        },
        {
            id: 3,
            title: "What are props?",
            content: "Props are used to pass data from one component to another."
        }
    ];

    return (
        <div>
            <h1>Accordion</h1>

            {items.map(item => (
                <div key={item.id}>
                    <h3
                        onClick={() =>
                            setOpen(prev =>
                                prev === item.id ? null : item.id
                            )
                        }
                        style={{
                            cursor: "pointer",
                            backgroundColor: "#eee",
                            padding: "10px"
                        }}
                    >
                        {item.title} {open === item.id ? "−" : "+"}
                    </h3>

                    {open === item.id && (
                        <p style={{ padding: "10px" }}>
                            {item.content}
                        </p>
                    )}
                </div>
            ))}
        </div>
    );
}

export default Accordion;
