<?php

$k041 = ['I\'m Sorry I Love You: SC','Kayoru','M&C! Comics','184','1 April 2015'];
$k042 = ['Love Starts: SC','Moe Yukimaru','M&C! Comics','200','1 April 2015'];
$k043 = ['Goddess of My Heart: SC','Asagi Hikaru','M&C! Comics','192','1 April 2015'];
$k044 = ['Shanaou Yoshitsune Genpei War Vol. 25','Hirofumi Sawada','M&C! Comics','192','25 Maret 2015'];
$k045 = ['Knight In The Area, The Vol. 31','Hiroaki Igano','Elex Media Komputindo','191','25 Februari 2015'];
$komik04 = [$k041, $k042, $k043, $k044, $k045];

$n041 = ['Historical Romance: What A Rogue Desires (Trilogi Keluarga Reece)','Caroline Linden','Elex Media Komputindo','404','18 Maret 2015'];
$n042 = ['Amore: Let Me Be With You','Ria N. Badaria','Gramedia Pustaka Utama','352','26 Februari 2015'];
$n043 = ['Supernova : Ksatria, Puteri, dan Bintang Jatuh (New Cover)','Dee Lestari','Bentang Pustaka','343','Desember 2014'];
$n044 = ['Contemporary Romance : It Happened One Wedding (Lamaran Pernikahan)','Julie James','Elex Media Komputindo','480','8 April 2015'];
$n045 = ['Harlequin : Baby, Don\'t Go (Melangkah Pulang Bersamamu)','Stephanie Bond','Gramedia Pustaka Utama','375','23 Maret 2015'];
$nonkomik04 = [$n041, $n042, $n043, $n044, $n045];

?>

<div class="show-all-filter-april-2015">
    <div class="row">
        <div class="col-md-5 col-md-offset-1"> <!-- APRIL TAHUN 2015 - KOMIK -->
            <div class="filter-komik-april-2015-to-clone__container">
                <div class="filter-komik-april-2015-to-clone">
                    <div class="best-book-title-komik">
                        Komik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-komik-april-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $komik04[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-komik-april-2015" href="#collapse'.$collapse.'-komik-april-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/4/k'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$komik04[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-komik-april-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$komik04[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$komik04[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$komik04[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$komik04[$i][4].'
                          </div>
                        </div>
                      </div>';
                  } ?>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-5"> <!-- april TAHUN 2015 - NONKOMIK-->
            <div class="filter-nonkomik-april-2015-to-clone__container">
                <div class="filter-nonkomik-april-2015-to-clone">
                    <div class="best-book-title-nonkomik">
                        Nonkomik
                    </div>
                    <div class="panel-group panel-group-custom" id="accordion-non-komik-april-2015">

                    <?php 
                    for($i=0; $i<5; $i++){
                        $collapse = '';
                        if($i == 0) $collapse = 'One';
                        else if($i == 1) $collapse = 'Two';
                        else if($i == 2) $collapse = 'Three';
                        else if($i == 3) $collapse = 'Four';
                        else $collapse = 'Five';

                        $title = $nonkomik04[$i][0];
                        if(strlen($title) > 32)
                            $title = substr($title,0,30) . '...';

                        echo'
                      <div class="panel panel-default panel-default-custom panel-default-custom-'.($i+1).'">
                        <div class="panel-heading panel-heading-custom panel-heading-custom-background-'.($i+1).'">      
                          <a class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion-non-komik-april-2015" href="#collapse'.$collapse.'-non-komik-april-2015">
                            <div class="panel-title panel-title-custom">
                                <img src="img/kumpulan_cover/4/n'.($i+1).'.jpg" class="img-responsive book-cover" align="left">
                                <span class="book-line-break"></span>
                                    <span class="book-title">'.$title.'</span><br>
                                    <span class="book-author">'.$nonkomik04[$i][1].'</span>
                            </div>
                          </a>      
                        </div>
                        <div id="collapse'.$collapse.'-non-komik-april-2015" class="panel-collapse collapse">
                          <div class="panel-body" style=" border-left: 1px solid #eca821 !important; border-right: 1px solid #eca821 !important; border-top: 0 solid #fff !important; border-bottom: 0 solid #fff !important;">
                            <strong>Judul</strong><br>
                            '.$nonkomik04[$i][0].'
                            <br><br>
                            <strong>Penerbit</strong><br>
                            '.$nonkomik04[$i][2].'
                            <br><br>
                            <strong>Jumlah halaman</strong><br>
                            '.$nonkomik04[$i][3].'
                            <br><br>
                            <strong>Tahun Terbit</strong><br>
                            '.$nonkomik04[$i][4].'
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
<div class="show-komik-or-nonkomik-filter-april-2015"> <!-- APRIL TAHUN 2015 - HASIL FILTERING -->
    <div class="row">
        <div class="col-md-7 grid-center">
            <div class="clone-filter-result-april-2015"></div>
        </div>
    </div>
</div>
