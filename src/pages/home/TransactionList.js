import { useFirestore } from "../../hooks/useFirestore";
//Styles
import styles from "./Home.module.css";

export default function TransactionList ( { transactions } )
{
    const { deleteDocument, response } = useFirestore( "transactions" );
    console.log( response );

    let date;

    let options =
    {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    transactions.forEach( transaction =>
    {
        date = transaction.createdAt.toDate().toLocaleDateString( "en-US", options );
    } )

    return (
        <ul className={ styles.transactions }>
            { transactions.map( ( transaction ) => (
                <li key={ transaction.id }>
                    <p className={ styles.name }>{ transaction.name }</p>
                    <p className={ styles.date }>{ date }</p>
                    <p className={ styles.amount }>{ transaction.amount }skr</p>
                    <button onClick={ () => deleteDocument( transaction.id ) }>x</button>
                </li>
            ) ) }
        </ul>
    );
}