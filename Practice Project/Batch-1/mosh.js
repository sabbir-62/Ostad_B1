

        const tabsLinks = document.querySelectorAll(".tabs__links");
        const tabsMedia = document.querySelector(".tabs__media");

        const nextTabDelay = 3000;
        let currentTabCounter = 0;

        tabsLinks[currentTabCounter].classList.add("tab-active");
        
        let tabInterval = setInterval(nextTab, nextTabDelay);


        function showNext(index){
            tabsLinks[index].classList.add("tab-active");  
            
        }


        function nextTab() {
            tabsLinks[currentTabCounter].classList.remove("tab-active");


            currentTabCounter = (currentTabCounter + 1) % tabsLinks.length;
          
            showNext(currentTabCounter)    
        }

    

        tabsLinks.forEach(function(tabLink, i){

            tabLink.addEventListener("click", function(){

                clearInterval(tabInterval)
               
                const currentlyActiveTab = document.querySelector(".tabs__links.tab-active");
                currentlyActiveTab.classList.remove("tab-active");
                showNext(i);
            })

        })

   