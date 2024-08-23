import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 20,
    fontSize: 10,
    lineHeight: 1.5,
  },
  header: {
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    marginBottom: 10,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableColHeader: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'center',
    padding: 3,
    fontSize: 10,
    fontWeight: 'bold',
  },
  tableCol: {
    width: '33%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#000',
    borderLeftWidth: 0,
    borderTopWidth: 0,
    textAlign: 'center',
    padding: 3,
    fontSize: 10,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 10,
  },
  signature: {
    marginTop: 10,
    textAlign: 'center',
    fontSize: 10,
  },
});

const ReportPDF = ({ reportData }) => {
  return (
    <Document>
      <Page style={styles.page} size="A4">
        {/* Header */}
        <View style={styles.header}>
          <Image
            src="https://your-logo-url.com/logo.png"
            style={{ width: 50, height: 50 }}
          />
          <Text>Vcare Diagnostic Centre</Text>
          <Text>Trusted Since 1999</Text>
        </View>

        {/* Patient Details */}
        <View style={styles.section}>
          <Text>Name: {reportData.username}</Text>
          <Text>Age/Dob/Sex: {reportData.age}</Text>
          <Text>Doctor: {reportData.doctor}</Text>
          <Text>Sample Collected at: {reportData.sample_collected_at}</Text>
        </View>

        {/* Test Results */}
        <View style={styles.section}>
          <Text style={styles.title}>DEPARTMENT OF BIOCHEMISTRY</Text>
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <Text style={styles.tableColHeader}>Test Description</Text>
              <Text style={styles.tableColHeader}>Value Observed</Text>
              <Text style={styles.tableColHeader}>
                Biological Reference Interval
              </Text>
            </View>
            {reportData.tests.map((test, index) => (
              <View style={styles.tableRow} key={index}>
                <Text style={styles.tableCol}>{test.description}</Text>
                <Text style={styles.tableCol}>{test.value}</Text>
                <Text style={styles.tableCol}>{test.referenceInterval}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>** END OF REPORT **</Text>
      </Page>
    </Document>
  );
};

export default ReportPDF;
