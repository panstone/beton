jQuery(document).ready(function($){
 
//в этой функции отслеживается изменение чекбокса "я не робот"
$(document).on('change', '.fofm input:checkbox', function() {
if($(this).is(':checked')){
$(".fofm input[type=submit]").removeAttr('disabled');
$('.fofm input[type=hidden].valTrFal').val('valTrFal_true');
}
else {
$(".fofm input[type=submit]").attr('disabled','disabled');
$('.fofm input[type=hidden].valTrFal').val('valTrFal_disabled');
}
});
 
//закрытие модального окна
$('.close_modal, .overlayl').click(function (){
$('.popup, .popup2, .overlayl').css({'opacity':'0', 'visibility':'hidden'});
$('.popup &gt; .fofm textarea').val('');
//сброс всех полей формы обраной связи
$(':input','.fofm').not(':button, :submit, :reset, :hidden').val('').removeAttr('checked').removeAttr('selected');
 
});
 
//показ модального окна
$('.open_modal').click(function (e){
e.preventDefault();
$('.popup, .overlayl').css({'opacity':'1', 'visibility':'visible'});
});
 
//аякс форма обратной связи
//проверяет какой ответ был получен
//и в зависимости от ответа
//выводит информацию о статусе
//отправки письма
$(".fofm").submit(function() {
var str = $(this).serialize();
$.ajax({
type: "POST",
url: "php/contact.php",
data: str,
success: function(msg) {
if(msg == 'ok') {
$('.popup2, .overlayl').css('opacity','1');
$('.popup2, .overlayl').css('visibility','visible');
$('.popup').css({'opacity':'0','visibility':'hidden'});
}
else {
$('.popup2 .window').html('<h5>Ошибка</h5>Сообщение не отправлено, убедитесь в правильности заполнение полей'); $('.popup2, .overlayl').css('opacity','1'); $('.popup2, .overlayl').css('visibility','visible'); $('.popup').css({'opacity':'0','visibility':'hidden'}); } } }); return false; }); });