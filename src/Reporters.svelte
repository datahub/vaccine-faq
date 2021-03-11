<script>
export let image;
export let reporter;
export let bio;
export let email;
export let twitterHandle;
export let authorPage;

</script>

<style>
.reporter{
    display: flex;
    margin: 5% 0;
    border-bottom: 1px solid #fff;
    padding-bottom: 30px; 
}
.reporter-image img{
    width:80px;
    padding: 5px 20px 0 0;
}
.reporter-info{
    font-family: 'Unify Sans', Tahoma, sans-serif;
}
.reporter-info a h4{
    margin-block-start: 0;
    margin-block-end: .33em;
    color: #222;
    cursor: pointer;
}
.reporter-info .bio{
    font-size: 13px;
    color: #636363;
}
</style>

<div class="reporter">
    <div class="reporter-image">
        <a href="{authorPage}">
            <img src="{image}?width=400&crop=1:1" alt="{reporter} headshot">
        </a>
    </div>
    <div class="reporter-info-block">
        <div class="reporter-info">
            <a href="{authorPage}"><h4>{reporter}</h4></a>
            <p class="bio">{bio}</p>
            <p class="bio"><em>You can reach them at <a href="mailto:{email}">{email}</a>. And follow their work at <a href="https://twitter.com/{twitterHandle}">@{twitterHandle}</a></em></p>
        </div>
    </div>
</div>