
        document.addEventListener("keydown", (e) => {
            if (e.key == "Enter") {
                myFunction();
                document.getElementById("input").value = "";
            }
        })
        function myFunction() {
            let input = document.getElementById('input').value;
            let choice = document.getElementById("choice").value;
            let result = "";
            let convert;
            let i = 0;
            switch (choice) {
                case "Degree_to_Radian": {
                    while (i != input) {
                        convert = input * (3.14 / 180);
                        result = `Your Entered ${input} and Degree to Radian is: ${convert}`
                        break;
                    }
                    break
                }
                case "Radian_to_Degree": {
                    while (i != input) {
                        convert = input * (180 / 3.14);
                        result = `Your Entered ${input} and Radian to Degree is: ${convert}`
                        break;
                    }
                    break
                }
                default: {
                    result = "Please Choice Something to Process"
                }
            }
            document.getElementById('output').style.display = "flex";
            document.getElementById('output').innerHTML = result;
        }   
   