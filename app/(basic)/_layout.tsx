import { View, Text } from 'react-native';
import React, { useState } from 'react';
import Footer from '@/components/footer';
import Sidebar from '@/components/sidebar';

const Layout = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* <View>
        <Text>Header</Text>
      </View> */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <Footer onHomePress={toggleSidebar}/>
    </>
  );
}

export default Layout;