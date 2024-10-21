import React from "react"
const DataChart = React.memo(({ data }) => {
  // Complex data processing here
  const processedData = processData(data)

  return <Chart data={processedData} />
})

export default DataChart
