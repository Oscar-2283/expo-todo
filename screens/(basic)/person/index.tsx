import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import usePersonStyles from "./styles/_style";
import { CircleUser } from "@tamagui/lucide-icons";
import { useTheme } from "tamagui";
import useCommonStore from "@/store/common";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const Personal = () => {
  const theme = useTheme();
  const styles = usePersonStyles();
  const userName = "";

  // 屏幕寬度，用於設置圖表寬度
  const screenWidth = Dimensions.get('window').width;

  // 假數據 - 柱狀圖
  const data = Array.from({ length: 7 }, (_, index) => ({
    week: index + 1,
    listenCount: index * 10 + 10,
  }));

  // 構建柱狀圖所需的數據格式
  const barChartData = {
    labels: ["週一", "週二", "週三", "週四", "週五", "週六", "週日"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43, 50]
      }
    ]
  };

  // 假數據 - 進度環圖
  const progressChartData = {
    labels: ['任務A', '任務B', '任務C', '任務D', '任務E'],
    data: [0.2, 0.4, 0.6, 0.8, 1], // 數值需在 0 到 1 之間
  };

  // 圖表配置
  const chartConfig = {
    backgroundGradientFrom: theme.$color8?.val,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: theme.$color5?.val,
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `${theme.color?.val}`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  const barWidth = 40; // 您可以调整此值
const barChartWidth = barWidth * data.length;

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
            <BarChart
              data={barChartData}
              // width={screenWidth - 48} // 減去左右內邊距
              width={barChartWidth}
              height={180}
              chartConfig={chartConfig}
              fromZero={true}
              // verticalLabelRotation={10}
              yAxisLabel=""
              yAxisSuffix=""
              xAxisLabel=""
              style={{ borderRadius: 16, alignSelf: 'center' }}
              // style={{ borderRadius: 16 }}
            />
          </View>
          <View style={styles.futureTodo}>
            <Text style={styles.misson_block_title}>未來七天的任務</Text>
          </View>
          <View style={styles.chartContainer}>
            {/* 圓餅圖 */}
            <Text style={styles.chartTitle}>未完成任務按分類分布</Text>
            <ProgressChart
              data={progressChartData}
              width={screenWidth - 48} // 減去左右內邊距
              // width={375} // 減去左右內邊距
              height={180}
              strokeWidth={10}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
              style={{ borderRadius: 16, alignSelf: 'center' }}
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Personal;
