# Monthly Expense Sheet

This code snippet represents a monthly budget tracker implemented in JavaScript. It generates random income, expenses, and displays the budget summary for a given month.

## Usage

1. Open an HTML file in your preferred browser.
2. Insert the provided JavaScript code into a `<script>` tag.
3. Ensure you have an HTML element with the id "MonthlyExpenses" where the monthly budget summary will be displayed.
4. Reload the page to see the generated monthly budget information.

## Code Explanation

- The `roll` function generates random numbers within a given range, optionally returning floating-point numbers.
- The `startDay` initializes the start of the month.
- The `buildMonth` function generates a month's worth of data, including expenses for each day.
- The monthly budget is calculated by subtracting rent and utilities from the monthly income.
- Expenses are generated randomly using the `generateExpenses` function.
- The `getMonthNetValue` function calculates the remaining budget after deducting monthly expenses.
- The `displayExpenses` function displays expenses for each day.
- The `displayMonth` function displays the monthly budget summary, including the budget and net value.

## Output

The page will display a monthly summary including the budget and net value, followed by individual days of the month with their respective expenses.

## Note

This code provides a simplified way to track monthly budgets and expenses. It showcases basic concepts of generating random data and displaying information on a webpage.

Feel free to modify and extend the code to suit your specific needs, such as incorporating actual data sources or adding more advanced features.


Quick start:

```
$ yarn # npm install
$ yarn build # npm run build
```

## Development

Run Webpack in watch-mode to continually compile the JavaScript as you work:

```
$ yarn watch # npm run watch
```

Happy Coding!
