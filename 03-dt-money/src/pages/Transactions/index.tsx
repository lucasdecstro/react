import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimente de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>10/10/2022</td>
            </tr>
            <tr>
              <td width="50%">Comidinha</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 11.000,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/10/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
