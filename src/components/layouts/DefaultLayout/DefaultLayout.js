import Header from '../Header';
import Footer from '../Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <header>
                <Header />
            </header>
            <main style={{ minHeight: '1000px' }}>{children}</main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefaultLayout;
