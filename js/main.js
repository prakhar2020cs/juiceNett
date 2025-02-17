const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            if (!entry.target.classList.contains('show')) {
                entry.target.classList.add('show');
            }
            observer.unobserve(entry.target);

        }else{
            if (entry.target.classList.contains('show')) {
                entry.target.classList.remove('show');
            }

        }
    })
},

);

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => { observer.observe(element)});