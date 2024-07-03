const CurrencySelect = () => {
  return (
    <div className="currency-select">
      <img src="https://flagsapi.com/ZA/flat/64.png" alt="Flag" />
      <select className="currency-dropdown">
        <option value="ZA" selected>
          ZA
        </option>
        <option value="INR">INR</option>
        <option value="NPR">NPR</option>
      </select>
    </div>
  );
}

export default CurrencySelect