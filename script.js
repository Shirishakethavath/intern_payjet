//  ======================select dropdown for wallet==================>
let index = 1;

const on = (listener, query, fn) => {
	document.querySelectorAll(query).forEach(item => {
		item.addEventListener(listener, el => {
			fn(el);
		})
	})
}

on('click', '.selectBtn', item => {
	const next = item.target.nextElementSibling;
	next.classList.toggle('toggle');
	next.style.zIndex = index++;
});
on('click', '.option', item => {
	item.target.parentElement.classList.remove('toggle');

	const parent = item.target.closest('.select').children[0];
	parent.setAttribute('data-type', item.target.getAttribute('data-type'));
	parent.innerText = item.target.innerText;
})
// select dropdown for wallet End

// ======================alert success infor ===========================>
    var Alert = undefined;
    (function (Alert) {
        var alert,
            error,
            trash,
            info,
            success,
            warning,
            _container;
        info = function (message, title, options) {
            return alert("info", message, title, "fa fa-check-circle", options);
        };
        warning = function (message, title, options) {
            return alert("warning", message, title, "fa fa-warning", options);
        };
        error = function (message, title, options) {
            return alert("error", message, title, "fa fa-exclamation-circle", options);
        };
        trash = function (message, title, options) {
            return alert("trash", message, title, "fa fa-trash-o", options);
        };
        success = function (message, title, options) {
            return alert("success", message, title, "fa fa-check-circle", options);
        };
        alert = function (type, message, title, icon, options) {
            var alertElem,
                messageElem,
                titleElem,
                iconElem,
                innerElem,
                _container;
            if (typeof options === "undefined") {
                options = {};
            }
            options = $.extend({}, Alert.defaults, options);
            if (!_container) {
                _container = $("#alerts");
                if (_container.length === 0) {
                    _container = $("<ul>")
                        .attr("id", "alerts")
                        .appendTo($("body"));
                }
            }
            if (options.width) {
                _container.css({width: options.width});
            }
            alertElem = $("<li>")
                .addClass("alert")
                .addClass("alert-" + type);
            setTimeout(function () {
                alertElem.addClass('open');
            }, 1);
            if (icon) {
                iconElem = $("<i>").addClass(icon);
                alertElem.append(iconElem);
            }
            innerElem = $("<div>").addClass("alert-block");
            //innerElem = $("<i>").addClass("fa fa-times");
            alertElem.append(innerElem);
            if (title) {
                titleElem = $("<div>")
                    .addClass("alert-title")
                    .append(title);
                innerElem.append(titleElem);
            }
            if (message) {
                messageElem = $("<div>")
                    .addClass("alert-message")
                    .append(message);
                //innerElem.append("<i class="fa fa-times"></i>");
                innerElem.append(messageElem);
                // innerElem.append("<em>Click to Dismiss</em>");      innerElemc =
                // $("<i>").addClass("fa fa-times");
            }
            if (options.displayDuration > 0) {
                setTimeout((function () {
                    leave();
                }), options.displayDuration);
            } else {
                innerElem.append("<em>Click to Dismiss</em>");
            }
            alertElem.on("click", function () {
                leave();
            });
            function leave() {
                alertElem.removeClass('open');
                alertElem.one(
                    'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionen' +
                            'd',
                    function () {
                        return alertElem.remove();
                    }
                );
            }
            return _container.prepend(alertElem);
        };
        Alert.defaults = {
            width: "",
            icon: "",
            displayDuration: 3000,
            pos: ""
        };
        Alert.info = info;
        Alert.warning = warning;
        Alert.error = error;
        Alert.trash = trash;
        Alert.success = success;
        return _container = void 0;
    })(Alert || (Alert = {}));
    this.Alert = Alert;
    $('#test').on('click', function () {
        Alert.info('Message');
    });
    // ======================  chartjs line==========================================>
    
    const xValues = ["2024_01", "2024_02", "2024_03"];
    const yValues = [2000000, 1500000, 1000000];
    
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
           //   fill: false,
    //   fillcolor:"red",
      lineTension: 0,
      pointBackgroundColor: "orangered",
    // strokeColor:"rgba(255, 122, 47, 1)",
    // pointColor:"rgba(255, 122, 47, 1)",
      backgroundColor: "rgba(255,204, 175)",
    //   pointStrokeColor:"#fff",
    //   pointHighlightFill:"#fff",
    //   pointHighlightStroke:"#4d90fe",
      borderColor: "orangered",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 1000000, max:5000000}}],
        }
      }
    });
    //   chartjs end
    
    // =============================chartjs circular==============================>
    let number = document.getElementById("number");
    let counter=0;
    setInterval(()=>{
        if(counter==68){
            clearInterval();
        }
        else{
            counter +=1;
            number.innerHTML=counter + "%"
        }
    },30)
    // chartjs circular end


    // Emi calculator
   function reset(){
  document.getElementById("value1").value = 0;
  document.getElementById("value2").value = 0;
  document.getElementById("value3").value = 0;
  document.getElementById("monthly-interest").innerHTML =" $ " +0;
  document.getElementById("monthly-payment").innerHTML =" $ " +0;
  document.getElementById("total-repayment").innerHTML =" $ " +0;
  document.getElementById("total-interest").innerHTML =" $ " +0;
}
function calculation(){
  var loanAmount = document.getElementById("value1").value;
  var interestRate = document.getElementById("value2").value;
  var loanDuration = document.getElementById("value3").value;
  //.......... declarations.............
 var interestPerYear = (loanAmount * interestRate)/100; 
 var monthlyInterest = interestPerYear/12;
  var monthlyPayment = monthlyInterest + (loanAmount/loanDuration);
  var totalInterestCost = monthlyInterest * loanDuration;
  var totalRepayment = monthlyPayment * loanDuration;
  //----------------monthly interest----------------------
 document.getElementById("monthly-interest").innerHTML = " $ " +monthlyInterest.toFixed(2);
 //-------------Monthly payment------------
   document.getElementById("monthly-payment").innerHTML = " $ " +monthlyPayment.toFixed(2); 
  //-------------Total repayment-----------
  document.getElementById("total-repayment").innerHTML =" $ " +totalRepayment.toFixed(2);
  //--------------Total Interest cost----------------
  document.getElementById("total-interest").innerHTML =" $ " +totalInterestCost.toFixed(2);
}
