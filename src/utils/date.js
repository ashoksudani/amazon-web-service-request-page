export default {
  format: (timeStamp, format) => {
    var date = new Date(timeStamp);
    switch (format) {
      case 'MMM DD YYYY':
        return new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit'
        }).format(date);
      default:
        return date;
    }
  }
};
