function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从 0 开始
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
}

// 使用示例
const time1 = new Date();
// const formattedTime = formatDate(time1);
// console.log(formattedTime);
// const date1 = new Date(formattedTime);

setTimeout(() => {
    const time2 = new Date()
    // const formattedTime2 = formatDate(time2);
    // console.log(formattedTime2);
    // const date2 = new Date(formattedTime2)
    console.log(time1 - time2)
}, 1000)