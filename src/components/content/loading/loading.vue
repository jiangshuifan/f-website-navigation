.<template>
  <div class="loading-cover">
      <div class="loading-circle">
        
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .loading-cover{
    position: fixed;
    height: 0;
    width: 100vw;
    top:0 ;
    left: 0;
    backdrop-filter: brightness(0.5);
    background-color: rgba(0,0,0,0.5);
    animation: 'load-fade' 2s linear;
    overflow: hidden;
  }
  .loading-circle{
    position: absolute;
    bottom:-21px;
    left: 50%;
    transform: translate(-50%);
    height: 15px;
    width: 15px;
    border: 3px solid white;
    border-right: 3px solid transparent;
    border-radius: 50%;
    animation: 'load-rotate' 1.5s  linear;
  }
  @keyframes load-rotate {
    0%  {bottom: 108px; transform: rotate(0deg);}
    25% {bottom: 108px; transform: rotate(360deg);}
    50% {bottom: 108px; transform: rotate(720deg);}
    75% {bottom: 108px; transform: rotate(1080deg);}
    100%{bottom: -21px; transform: rotate(1440deg);}
  }

  @keyframes load-fade {
    0%  {height:100vh}
    25% {height:100vh}
    50% {height:100vh}
    75% {height:100vh}
    100%{height: 0;}
  }
</style>