//Styles
import styles from "./Home.module.css";
//Components
import TransactionForm from "./TransactionForm";


export default function Home ()
{
    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                transaction list
            </div>
            <div className={ styles.sidebar }>
                <TransactionForm />
            </div>
        </div>
    );
}