import Button from "antd-mobile/lib/button";
import Head from "next/head";
import React from "react";
import { Badge, Tabs, Toast, WhiteSpace } from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";

const tabs = [
  { title: <Badge text={"3"}>첫번째 탭</Badge> },
  { title: <Badge text={"20"}>두번째 탭</Badge> },
  { title: <Badge dot>세번째 탭</Badge> },
];

const tabs2 = [
  { title: "First Tab", sub: "1" },
  { title: "Second Tab", sub: "2" },
  { title: "Third Tab", sub: "3" },
];

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Button
          onClick={() => {
            Toast.info("This is a toast tips !!!", 1);
          }}
        >
          Start
        </Button>
        <Tabs
          tabs={tabs}
          initialPage={1}
          onChange={(tab, index) => {
            console.log("onChange", index, tab);
          }}
          onTabClick={(tab, index) => {
            console.log("onTabClick", index, tab);
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of first tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of second tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of third tab
          </div>
        </Tabs>
        <WhiteSpace />
        <Tabs
          tabs={tabs2}
          initialPage={1}
          tabBarPosition="bottom"
          renderTab={(tab) => <span>{tab.title}</span>}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of first tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of second tab
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "150px",
              backgroundColor: "#fff",
            }}
          >
            Content of third tab
          </div>
        </Tabs>
        <WhiteSpace />
      </div>
    </div>
  );
}
