import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Layout from 'components/Layout'


export default function App() {
  return (
    <Router>

      <Switch >
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>

    </Router>
  );
}

function NoMatch() {
  return <h2>当前页面不存在</h2>;
}
function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页面</h2>
    </Layout>
  )
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页面</h2>
    </Layout>
  )
}

