<template>
 <footer class="page-footer">
  <div class="container">
    <div class="row">
      <div class="col l6 s12">
        <h5>Social Media</h5>
        <ul>
          <li>
            <img class="footer-img" src="@/assets/IG_Glyph.png" />
          </li>
        </ul>
      </div>
      <div class="col l4 offset-l2 s12">
        <h5>Contact Me</h5>
        <ul>
          <li>
            <a :href="EMAIL_LINK">
              <i class="grow material-icons">email</i>
            </a>
            {{ EMAIL_ADDRESS }}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="footer-copyright">
    <div class="container">
      Designed by
      <a :href="GITHUB_LINK">
        <span class="copyright">vapurrmaid</span>
      </a>
      © 2018
    </div>
  </div>
 </footer>
</template>

<script>
const EMAIL_ADDRESS = 'example@example.com'
const EMAIL_LINK = '#' // todo
const GITHUB_LINK = `https://github.com/vapurrmaid`

export default {
  name: 'Footer',
  data () {
    return {
      EMAIL_ADDRESS,
      EMAIL_LINK,
      GITHUB_LINK
    }
  }
}
</script>

<style>
span.copyright {
  color: #000;
  font-family: 'VT323', monospace;
  letter-spacing: 2px;
}

.footer-img {
  height: 30px;
  width: 30px;
}
</style>
