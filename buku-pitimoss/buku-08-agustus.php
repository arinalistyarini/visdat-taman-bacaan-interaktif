<?php

$k081 = ['Knight In The Area, The Vol. 34','Hiroaki Igano','Elex Media Komputindo','192','29 Juli 2015'];
$k082 = ['Alice In Borderland Vol. 10','Haro Aso','Elex Media Komputindo','168','29 Juli 2015'];
$k083 = ['Shirokuro-Kun & Anzu-Chan: SC','Sumire MOMOI','TIGA LANCAR','158','19 Juni 2015'];
$k084 = ['When I Can Give You My Kiss : SC','Uri Sugata','M&C! Comics','200','5 Agustus 2015'];
$k085 = ['Angel Voice Vol. 23','Takao Koyano','Level Comics','192','1 Juli 2015'];
$komik08 = [$k081, $k082, $k083, $k084, $k085];

$n081 = ['Hellions of Halstead Hal : The Truth About Lord Stoneville','Sabrina Jeffries','Gramedia Pustaka Utama','456','9 Juli 2015'];
$n082 = ['Historical Romance : Sold To A Laird (Trilogi Tulloch Sgathan)','Karen Ranney','Elex Media Komputindo','488','5 Agustus 2015'];
$n083 = ['Historical Romance : Seduced By The Highlander','Julianne Maclean','Elex Media Komputindo','480','5 Agustus 2015'];
$n084 = ['Historical Romance : Seri Regency Barrister : In The Barrister\'s Bed','Tina Gabrielle','Elex Media Komputindo','504','8 Juli 2015'];
$n085 = ['Dilan: Dia Adalah Dilanku Tahun 1990','Pidi Baiq','Pastel Books (Mizan Group)','332','2014'];
$nonkomik08 = [$n081, $n082, $n083, $n084, $n085];

?>

<div class="show-all-filter-agustus-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- AGUSTUS TAHUN 2015 - KOMIK -->
            <div class="filter-komik-agustus-2015-to-clone__container">
                <div class="filter-komik-agustus-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-agustus-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik08[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-agustus-2015" href="#collapse'.$collapse.'-komik-agustus-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/8/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik08[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-agustus-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik08[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik08[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik08[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik08[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- agustus TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-agustus-2015-to-clone__container">
                <div class="filter-nonkomik-agustus-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-agustus-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik08[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom" style="background:#eca821">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-agustus-2015" href="#collapse'.$collapse.'-non-komik-agustus-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/8/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik08[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-agustus-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik08[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik08[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik08[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik08[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-agustus-2015"> <!-- AGUSTUS TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-agustus-2015"></div>
        </div>
    </div>
</div>
