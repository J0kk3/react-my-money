import { useAuthContext } from '../../context/AuthContext';
//Styles
import styles from "./Home.module.css";
//Components
import TransactionForm from "./TransactionForm";


export default function Home ()
{
    const { user } = useAuthContext();
    return (
        <div className={ styles.container }>
            <div className={ styles.content }>
                transaction list
            </div>
            <div className={ styles.sidebar }>
                <TransactionForm uid={ user.uid } />
            </div>
        </div>
    );
}