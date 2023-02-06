import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  // console.log(items);
  const getLineClassNames = elem => {
    if (items.indexOf(elem) % 2 !== 0) return `${css.tr} ${css.grey}`;
    else return `${css.tr}`;
  };
  return (
    <>
      <table className={css.transaction__history}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(elem => (
            <tr className={getLineClassNames(elem)} key={elem.id}>
              <td className={css.td}>{elem.type}</td>
              <td className={css.td}>{elem.amount}</td>
              <td className={css.td}>{elem.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
  key: PropTypes.string,
};
