  const fetchHeader = async () => {
    try {
        const res = await fetch("../../components/header.html"); 
        const template = await res.text();
        const wrapper = document.getElementById("wrapper");
        wrapper.insertAdjacentHTML("afterbegin", template);
    } catch (err) {
        console.log(err);
    }
  };
  
  const fetchFooter = async () => {
    try {
        const res = await fetch("../../components/footer.html"); 
        const template = await res.text();
        const wrapper = document.getElementById("wrapper");
        wrapper.insertAdjacentHTML("beforeend", template);
    } catch (err) {
      console.log(err);
    }
  };
  
  fetchHeader();
  fetchFooter();