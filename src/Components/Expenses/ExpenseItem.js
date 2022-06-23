import ExpenseDate from "../Expenses/ExpenseDate";
import Card from "../UI/Card";
import "../Expenses/ExpenseItem.css";
import React from "react";

const ExpenseItem = (props) => {
  // return React.createElement(
  //   Card,
  //   {className: "expense-item"},

  //   React.createElement(
  //     ExpenseDate,
  //     {date: props.date}
  //   ),

  //   React.createElement(
  //     "div",
  //     {className: "expense-item__description"},

  //     React.createElement(
  //       "h2",
  //       {},
  //       props.title
  //     ),

  //     React.createElement(
  //       "div",
  //       {className: "expense-item__price"},
  //       "$" + props.amount
  //     )
  //   )
  // );

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
