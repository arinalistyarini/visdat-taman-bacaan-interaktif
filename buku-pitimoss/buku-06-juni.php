<?php

$k061 = ['Study: SC','Yue Takasuka','M&C! Comics','176','27 Mei 2015'];
$k062 = ['Naruto Vol. 69','Masashi Kishimoto','Elex Media Komputindo','208','27 Mei 2015'];
$k063 = ['Love Skills: SC','Ayumi Shiina','M&C! Comics','184','8 April 2015'];
$k064 = ['The Prince of Stars: SC','Tsukimi Papiko','M&C! Comics','192','8 April 2015'];
$k065 = ['Melancholic: SC','Noriko Otani','M&C! Comics','176','27 Mei 2015'];
$komik06 = [$k061, $k062, $k063, $k064, $k065];

$n061 = ['Contemporary Romance : Girl Least Likely to Marry','Amy Andrews','Elex Media Komputindo','324','3 Juni 2015'];
$n062 = ['The Ideal Man (Kekasih Sempurna)','Julie Grawood','Dastan Books','392','30 Mei 2015'];
$n063 = ['Metropop: In A Blue Moon','Ilana Tan','Gramedia Pustaka Utama','320','April 2015'];
$n064 = ['Harlequin Koleksi Istimewa : The Most Conveted Prize (Hadiah Terindah)','Penny Jordan','Gramedia Pustaka Utama','224','Juni 2015'];
$n065 = ['Marry Now, Sorry Later','Christian Simamora','Twigora','438','6 Mei 2015'];
$nonkomik06 = [$n061, $n062, $n063, $n064, $n065];

?>

<div class="show-all-filter-juni-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- JUNI TAHUN 2015 - KOMIK -->
            <div class="filter-komik-juni-2015-to-clone__container">
                <div class="filter-komik-juni-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-juni-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik06[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-juni-2015" href="#collapse'.$collapse.'-komik-juni-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/6/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik06[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-juni-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik06[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik06[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik06[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik06[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- juni TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-juni-2015-to-clone__container">
                <div class="filter-nonkomik-juni-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-juni-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik06[$i][0];
                        if(strlen($title) > 30)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-juni-2015" href="#collapse'.$collapse.'-non-komik-juni-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/6/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik06[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-juni-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik06[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik06[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik06[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik06[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="show-komik-or-nonkomik-filter-juni-2015"> <!-- JUNI TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-juni-2015"></div>
        </div>
    </div>
</div>
