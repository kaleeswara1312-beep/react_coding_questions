import { useState } from "react";

function StarRating() {
    const [star, setStar] = useState(0);

    return (
        <div>
            <h1>StarRating</h1>
            <div style={{ display: "flex" }}>
                {
                    [1, 2, 3, 4, 5].map(item => {
                        return (
                            <div key={item} style={{  cursor: "pointer", fontSize: "30px", color: item <= star ? "gold" : 'grey' }} onClick={() => {setStar(prev => prev === item ? 0 : item)}}>
                                ☆
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StarRating;