const contentClickHandler = (e, history) => {
  const targetLink = e.target.closest('a');
  if (!targetLink) return;
  e.preventDefault();
  history.push(e.target.getAttribute("href"));
};

export default contentClickHandler;
