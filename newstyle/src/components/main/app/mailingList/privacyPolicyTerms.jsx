import React from "react";
import Header from "../../../header/headerDesktop/header";
import Breadcrumbs from "../../breadcrumbs/breadcrumbs";
import Footer from "../../../footer/footer";

function PrivacyPolicyTerms () {

    return (
        <>
          <Header />
          <Breadcrumbs/>
          <div className="card">
            <h1>Политика конфеденциальности</h1>
            <ul>
                <li>
                    <h4> Сбор информации</h4>
                    <p>
                        При посещении нашего веб-сайта вы можете просматривать товары и услуги, не предоставляя нам личную информацию. 
                        Однако, для совершения покупки или участия в акциях и программе лояльности, мы можем попросить вас предоставить 
                        некоторую информацию, включая ваше имя, адрес электронной почты, адрес доставки и платежные данные.
                    </p>
                </li>
                <li>
                    <h4> Использование информации</h4>
                    <p>
                        Мы используем предоставленную вами информацию для обработки ваших заказов, обеспечения доставки товаров, предоставления 
                        информации о состоянии заказа, обработки возвратов и решения возникающих вопросов. Мы также можем использовать вашу 
                        информацию для обратной связи с вами относительно наших товаров, акций, новостей и предложений, если вы дали согласие 
                        на получение таких сообщений.
                    </p>
                </li>
                <li>
                    <h4> Защита информации</h4>
                    <p>
                        Мы предпринимаем все меры для обеспечения безопасности вашей личной информации. Мы используем надежные технические 
                        и организационные меры для защиты данных от несанкционированного доступа, изменения, раскрытия или уничтожения. 
                        Ваши платежные данные передаются через защищенное соединение и обрабатываются с соблюдением стандартов безопасности 
                        платежных карт.
                    </p>
                </li>
                <li>
                    <h4> Раскрытие информации третьим лицам</h4>
                    <p>
                        Мы не продаем, не обмениваем и не передаем вашу личную информацию третьим лицам без вашего согласия, 
                        за исключением случаев, когда это необходимо для выполнения услуг, связанных с вашим заказом 
                        (например, доставка товаров или обработка платежей). Мы можем раскрывать информацию, если это требуется законом 
                        или если мы убеждены, что такие действия необходимы для соблюдения правил или защиты наших прав и собственности, 
                        а также обеспечения безопасности наших клиентов и общества в целом.
                    </p>
                </li>
                <li>
                    <h4> Куки и аналитика</h4>
                    <p>Мы можем использовать файлы "cookie" и аналитические инструменты на нашем веб-сайте. Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве и помогают нам анализировать ваше взаимодействие с сайтом, предоставлять вам более персонализированный опыт и улучшать наши услуги. Аналитические инструменты позволяют нам собирать анонимные данные о посетителях и использовании сайта для статистического анализа и улучшения функциональности и содержания.</p>
                </li>
                <li>
                    <h4> Ссылки на сторонние веб-сайты</h4>
                    <p>Наш веб-сайт может содержать ссылки на сторонние веб-сайты, которые не контролируются нами. Мы не несем ответственности за политику конфиденциальности и практики безопасности таких веб-сайтов. Рекомендуется ознакомиться с политикой конфиденциальности каждого веб-сайта, который вы посещаете, прежде чем предоставлять им свою личную информацию.</p>
                </li>
                <li>
                    <h4> Согласие и изменения</h4>
                    <p>Используя наш веб-сайт, вы соглашаетесь с условиями данной политики конфиденциальности. Мы оставляем за собой право вносить изменения в эту политику по своему усмотрению. Изменения будут опубликованы на нашем веб-сайте, и вам рекомендуется регулярно проверять обновления. Продолжая использовать наш веб-сайт после внесения изменений, вы подтверждаете свое согласие с обновленной политикой конфиденциальности.</p>
                </li>
            </ul> 
            <p>Если у вас возникли вопросы или требуется дополнительная информация о нашей политике конфиденциальности, пожалуйста, свяжитесь с нашей службой поддержки. Мы готовы помочь вам и рассмотреть ваши запросы. Спасибо, что выбрали наш интернет-магазин одежды.</p>
          </div>
          <Footer />
        </>
    );

}

export default PrivacyPolicyTerms;