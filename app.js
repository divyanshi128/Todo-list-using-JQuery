
const list= $('li');

$('#plus').click(function(){
    $('#inp').fadeToggle();
})

$("ul").on('click','li',function(){
    $(this).toggleClass('list')
})

$("ul").on('click','#dustbin',function(e){
    $(this).parent().fadeOut()
    e.stopPropogation()
})

$('#inp').keypress(function(e){
    if(e.which===13){
        $('#list').append(`<li><span  id="dustbin" ><i class="fa-regular fa-trash-can"></i></span>${$(this).val()}</li>`)
        $(this).val("");

        var background= ['red','blue','green','pink','brown','Violet','gray','SlateBlue','orange','tomato','black','MediumSeaGreen']
        var colorAdd=[];

        for( var i=0;i<$('li').length;i++){    
            var box=function(){   
            const back =background[Math.floor(Math.random() * (background.length))];
            if(colorAdd.includes(back)==Boolean(0)){
                $('li')[i].style.backgroundColor=`${back}`
                colorAdd.push(back)
            }

            else{
                box();
            }


            }
        box();
        }

    }

})



var colors= ['red','blue','green','pink','brown','Violet','gray','SlateBlue','orange','tomato','black','MediumSeaGreen']
var colorAdded=[];
for( var i=0;i<list.length;i++){    
    var box_color=function(){   
        const color=colors[Math.floor(Math.random() * (colors.length))];
        if(colorAdded.includes(color)==Boolean(0)){
        list[i].style.backgroundColor=`${color}`
        colorAdded.push(color)
        }

        else{
            box_color();
        }

    
    }
    box_color();
}
