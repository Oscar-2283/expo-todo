import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import usePersonStyles from "./styles/_style";
import { CartesianChart, Bar, PolarChart, Pie } from "victory-native";
import { CircleUser } from "@tamagui/lucide-icons";
import { LinearGradient, useFont, vec } from "@shopify/react-native-skia";
import { useTheme } from "tamagui";
import useCommonStore from "@/store/common";

const randomNumber = () => Math.floor(Math.random() * (50 - 25 + 1)) + 125;
function generateRandomColor(): string {
  // Generating a random number between 0 and 0xFFFFFF
  const randomColor = Math.floor(Math.random() * 0xffffff);
  // Converting the number to a hexadecimal string and padding with zeros
  return `#${randomColor.toString(16).padStart(6, "0")}`;
}

const DATA = (numberPoints = 5) =>
  Array.from({ length: numberPoints }, (_, index) => ({
    value: randomNumber(),
    color: generateRandomColor(),
    label: `Label ${index + 1}`,
  }));

const Personal = () => {
  const theme = useTheme();
  const { themeType, setThemeType } = useCommonStore();
  const styles = usePersonStyles();
  const [pieData, setPieData] = useState(DATA(5));
  const [insetWidth, setInsetWidth] = useState(4);
  const [insetColor, setInsetColor] = useState<string>("#fafafa");
  const [dataLabelSegment, setDataLabelSegment] = useState<
    "simple" | "custom" | "none"
  >("none");
  // 假數據
  const userName = "";

  const data = Array.from({ length: 7 }, (_, index) => ({
    // Starting at 1 for Jaunary
    month: index + 1,
    // Randomizing the listen count between 100 and 50
    listenCount: Math.floor(Math.random() * (100 - 50 + 1)) + 50,
  }));

  const pieChartData = [
    { x: "組件A", y: 35 },
    { x: "組件B", y: 25 },
    { x: "組件C", y: 20 },
    { x: "組件D", y: 20 },
  ];

  return (
    <>
      <ScrollView
        contentContainerStyle={{ padding: 16 }}
        style={styles.container}
      >
        <View style={styles.content}>
          {/* 用戶區塊 */}
          <View style={styles.user}>
            <CircleUser size="$4" color={theme.$color12?.val} />
            <View style={styles.userInfo}>
              <Text style={styles.plan}>堅持計劃7天</Text>
              <Text style={styles.userName}>{userName ? userName : '點擊登入'}</Text>
            </View>
          </View>
          <View style={styles.misson_block}>
            <Text style={styles.misson_block_title}>任務概述</Text>
            <View style={styles.misson_block_content}>
              <View style={styles.misson_block_content_item}>
                <Text style={styles.misson_block_content_item_text}>0</Text>
                <Text style={styles.misson_block_content_item_text}>已完成</Text>
              </View>
              <View style={styles.misson_block_content_item}>
                <Text style={styles.misson_block_content_item_text}>0</Text>
                <Text style={styles.misson_block_content_item_text}>已完成</Text>
              </View>
            </View>
          </View>

          {/* 圖表區塊 */}
          <View style={styles.chartContainer}>
            {/* 基礎折線圖 */}
            <Text style={styles.chartTitle}>每日任務完成情況</Text>
            <CartesianChart
              data={data}
              xKey="month"
              yKeys={["listenCount"]}
              domainPadding={{ left: 50, right: 50, top: 30 }}
              axisOptions={{
                /**
                 * 👇 Pass the font object to the axisOptions.
                 * This will tell CartesianChart to render axis labels.
                 */
                // font,
                /**
                 * 👇 We will also use the formatXLabel prop to format the month number
                 * from a number to a month name.
                 */
                formatXLabel: (value) => {
                  const date = new Date(2023, value - 1);
                  return date.toLocaleString("default", { month: "short" });
                },
              }}
            >
              {({ points, chartBounds }) => (
                <Bar
                  chartBounds={chartBounds} // 👈 chartBounds is needed to know how to draw the bars
                  points={points.listenCount} // 👈 points is an object with a property for each yKey
                  roundedCorners={{
                    topLeft: 5,
                    topRight: 5,
                  }}
                >
                  <LinearGradient
                    start={vec(0, 0)} // 👈 The start and end are vectors that represent the direction of the gradient.
                    end={vec(0, 400)}
                    colors={[
                      // 👈 The colors are an array of strings that represent the colors of the gradient.
                      theme.color10?.val,
                      // "#a78bfa50" // 👈 The second color is the same as the first but with an alpha value of 50%.
                    ]}
                  />
                </Bar>
              )}
            </CartesianChart>
          </View>
          <View style={styles.futureTodo}>
            <Text style={styles.misson_block_title}>未來七天的任務</Text>
          </View>
          <View style={styles.chartContainer}>
            {/* 圓餅圖 */}
            <Text style={styles.chartTitle}>未完成任務按分類分布</Text>
            <PolarChart
              data={pieData} // 👈 specify your data
              labelKey={"label"} // 👈 specify data key for labels
              valueKey={"value"} // 👈 specify data key for values
              colorKey={"color"} // 👈 specify data key for color
            >
              <Pie.Chart>
                {({ slice }) => {
                  return (
                    <>
                      <Pie.Slice>
                        {dataLabelSegment === "simple" && (
                          <Pie.Label color={"black"} /> //font={font}
                        )}
                      </Pie.Slice>

                      {/* <Pie.SliceAngularInset
                        // angularInset={{
                        //   angularStrokeWidth: insetWidth,
                        //   // angularStrokeColor: insetColor,
                        // }}
                      /> */}
                    </>
                  );
                }}
              </Pie.Chart>
            </PolarChart>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Personal;
