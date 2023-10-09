<section class="section-faq">
  <div class="container-main">
    <div class="row">
      <h2>
        Why Choose InMotion<i class="fa fa-registered ic-registered" aria-hidden="true"></i> Robotic Therapy?
      </h2>
    </div>
    <div class="row">
      <div class="col-12 col-lg-5">
        <img class="bionik-pc" src="./img/bionik_pc.png" alt="bionik pc">
      </div>
      <div class="col-12 col-lg-7">
        <div id="accordion">
          <?php
          $obj = array(
            '1' => array(
              'title' => 'Advanced Robotic Assistance:',
              'text' => '<p><i>Real-time interactive response that adjust difficulty based on progress</i></p>
              <br><p>The InMotion<i class="fa fa-registered ic-registered" aria-hidden="true"></i> series combines
           cutting-edge robotics and intelligent software to provide precise and adaptive assistance during
           therapy sessions. These state-of-the-art devices seamlessly integrate into your rehabilitation
           protocols, enhancing the effectiveness of your treatments.</p>'
            ),
            '2' => array(
              'title' => 'Targeted Rehabilitation:',
              'text' => 'text'
            ),
            '3' => array(
              'title' => 'Engaging and Interactive Sessions:',
              'text' => 'text'
            ),
            '4' => array(
              'title' => 'Real-time Performance Feedback:',
              'text' => 'text'
            ),
            '5' => array(
              'title' => 'Easy Integration:',
              'text' => 'text'
            ),
            '6' => array(
              'title' => 'Evidence-Based Results:',
              'text' => 'text'
            ),
          );
          foreach ($obj as $key => $value) {
            $collapsed = 'false';
            $collapsedValue = 'collapsed';
            $show = '';
            if ($key == '1') {
              $collapsed = 'true';
              $collapsedValue = '';
              $show = 'show';
            }
            ?>
            <div class="accordion">
              <div class="accordion-item" id="heading-<?= $key ?>">
                <button class="btn accordion-title <?= $collapsedValue ?>" data-bs-toggle="collapse"
                  data-bs-target="#collapse-<?= $key ?>" aria-expanded="<?= $collapsed ?>"
                  aria-controls="collapse-<?= $key ?>">
                  <span class="minus"></span>
                  <span class="plus"></span>
                  <?= $value['title'] ?>
                </button>
              </div>
              <div id="collapse-<?= $key ?>" class="collapse <?= $show ?>" aria-labelledby="heading-<?= $key ?>">
                <div class="accordion-body">
                  <?= $value['text'] ?>
                </div>
              </div>
            </div>
            <?php
          }
          ?>
        </div>
        <a href="#" class="btn btn-primary">Request a demo</a>
      </div>
    </div>
  </div>
</section>