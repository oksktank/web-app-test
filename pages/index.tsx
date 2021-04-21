import Button from "antd-mobile/lib/button";
import Head from "next/head";
import React from "react";
import {
  Badge,
  List,
  SearchBar,
  Tabs,
  Toast,
  WhiteSpace,
  Checkbox,
  Picker,
} from "antd-mobile";
import "antd-mobile/dist/antd-mobile.css";
const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

const data = [
  { value: 0, label: "Ph.D." },
  { value: 1, label: "Bachelor" },
  { value: 2, label: "College diploma" },
];
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
          style={{
            margin: 20,
          }}
          type="primary"
          onClick={() => {
            Toast.info("This is a toast tips !!!", 1);
          }}
        >
          Start
        </Button>
        <SearchBar placeholder="Search" maxLength={8} cancelText="취소" />
        <WhiteSpace />
        <Tabs
          tabs={tabs}
          initialPage={0}
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
          initialPage={0}
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
        <List renderHeader={() => "CheckboxItem demo"}>
          {data.map((i) => (
            <CheckboxItem key={i.value}>{i.label}</CheckboxItem>
          ))}
          <CheckboxItem
            key="disabled"
            data-seed="logId"
            disabled
            defaultChecked
            multipleLine
          >
            Undergraduate<List.Item.Brief>Auxiliary text</List.Item.Brief>
          </CheckboxItem>
        </List>
        <WhiteSpace />
        <Picker
          data={seasons}
          title="분기 선택"
          cascade={false}
          extra="2021년 봄"
          okText="확인"
          dismissText="닫기"
          // value={this.state.sValue}
          // onChange={(v) => this.setState({ sValue: v })}
          // onOk={(v) => this.setState({ sValue: v })}
        >
          <List.Item arrow="horizontal">분기 선택</List.Item>
        </Picker>
      </div>
      <style jsx global>{`
        @import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);
        @import url(//fonts.googleapis.com/earlyaccess/nanumgothiccoding.css);
        @import url(//fonts.googleapis.com/earlyaccess/nanummyeongjo.css);
        @import url(//fonts.googleapis.com/earlyaccess/nanumbrushscript.css);
        @import url(//fonts.googleapis.com/earlyaccess/nanumpenscript.css);
        @import url(//cdn.jsdelivr.net/font-nanum/1.0/nanumbarungothic/nanumbarungothic.css);

        html,
        body {
          font-family: "Nanum Gothic";
        }
        body {
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}

const seasons = [
  [
    {
      label: "2020",
      value: "2020",
    },
    {
      label: "2021",
      value: "2021",
    },
  ],
  [
    {
      label: "봄",
      value: "봄",
    },
    {
      label: "여름",
      value: "여름",
    },
  ],
];
