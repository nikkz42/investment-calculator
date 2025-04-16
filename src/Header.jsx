import investmentLogo from './assets/investment-calculator-logo.png';

export default function Header() {
    return (
        <header id='header'>
            <img src={investmentLogo} alt="Investment Logo"/>
            <h2>Investment Calculator</h2>
        </header>
    );
}