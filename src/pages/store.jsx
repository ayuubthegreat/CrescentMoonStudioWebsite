import { useSelector } from "react-redux";


export default function Store() {
    const storeItems = useSelector(state => state.store.items);
    return (
        <div>
            <h1>Store Page</h1>
            <ul>
                {storeItems.map(item => (
                    <li key={item.name}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p>Price: ${item.price}</p>
                        <p>Stock: {item.stock}</p>
                        <p>Type: {item.type}</p>
                        <p>Age Rating: {item.ageRating}</p>
                        <img src={item.imageContent.relativeUrl} alt={item.imageContent.altText} />
                        {item.subscriptionDuration && <p>Subscription Duration: {item.subscriptionDuration} months</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
}