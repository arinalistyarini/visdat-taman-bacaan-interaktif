<?php

$k071 = ['My Cool Angel: SC','Nana Shiiba','M&C! Comics','200','3 Juli 2015'];
$k072 = ['Shanaou Yoshitsune Genpei War Vol. 26','Hirofumi Sawada','M&C! Comics','192','13 Mei 2015'];
$k073 = ['Youth Trickers: SC','Minami Mizuno','Elex Media Komputindo','224','17 Juni 2015'];
$k074 = ['Shirokuro-Kun & Anzu-Chan: SC','Sumire MOMOI','TIGA LANCAR','158','19 Juni 2015'];
$k075 = ['Special A: Street Fight','Maki Minami','M&C! Comics','192','24 Juni 2015'];
$komik07 = [$k071, $k072, $k073, $k074, $k075];

$n071 = ['Dilan: Dia Adalah Dilanku Tahun 1991','Pidi Baiq','Pastel Books','344','Juli 2015'];
$n072 = ['Temptation : Serial Stone Creek - The Bridegroom (Sang Mempelai Pria)','Linda Lael Miller','Elex Media Komputindo','512','8 Juli 2015'];
$n073 = ['Historical Romance : Bedding Lord Ned - Serial Duchess of Love','Sally Mackenzie','Elex Media Komputindo','456','8 Juli 2015'];
$n074 = ['Jackson Hole Wyoming : The Loner (Sang Pemburu)','Lindsay Mckenna','Gramedia Pustaka Utama','376','Juli 2015'];
$n075 = ['Filosofi Kopi : Kumpulan Cerita dan Prosa Satu Dekade','Dee Lestari','Bentang Pustaka','200','8 April 2015'];
$nonkomik07 = [$n071, $n072, $n073, $n074, $n075];

?>

<div class="show-all-filter-juli-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- JULI TAHUN 2015 - KOMIK -->
            <div class="filter-komik-juli-2015-to-clone__container">
                <div class="filter-komik-juli-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-juli-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik07[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-juli-2015" href="#collapse'.$collapse.'-komik-juli-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/7/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik07[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-juli-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik07[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik07[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik07[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik07[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- juli TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-juli-2015-to-clone__container">
                <div class="filter-nonkomik-juli-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-juli-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik07[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-juli-2015" href="#collapse'.$collapse.'-non-komik-juli-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/7/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik07[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-juli-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik07[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik07[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik07[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik07[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-juli-2015"> <!-- JULI TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-juli-2015"></div>
        </div>
    </div>
</div>
