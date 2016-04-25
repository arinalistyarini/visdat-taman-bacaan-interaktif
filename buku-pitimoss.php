<?php $var = 2; include 'header.php'; ?>

<!-- Page Heading -->
<div class="row">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-md-11 grid-center white-box">
                <div class="big-title">
                    <p style="float:left">
                        Jumlah Buku <span class="smaller-title">Pitimoss Fun Library Tahun <span class="green-bold">2015</span></span>
                    </p>
                    <p style="float:right">
                        <span class="smaller-title"><span class="text-emphasize">80.642</span> buku <a class="toggle-info hide-show-info-jumlah-buku"><i class="fa arrow-changeable fa-angle-up"></i></a></span>
                    </p>
                    <div style="clear: both;"></div>
                </div>
                <div class="info-content-jumlah-buku">
                    Berikut ini adalah perincian buku yang dimiliki oleh Pitimoss:
                    <div id="jumlah-buku-chart" class="jumlah-buku-chart-size grid-center"></div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-11 grid-center white-box white-box-last">
                <div class="big-title">
                    <p style="float:left">
                        Buku Pinjaman Terlaris <span class="smaller-title">Pitimoss Fun Library Tahun <span class="green-bold">2015</span></span>
                    </p>
                    <p style="float:right">
                        <span class="smaller-title"><a class="toggle-info hide-show-info-terlaris"><i class="fa arrow-changeable fa-angle-up"></i></a></span>
                    </p>
                    <div style="clear: both;"></div>
                </div>
                <div class="info-content-terlaris">
                    <div class="row">
                        <div class="col-md-12">
                            <!-- <div class="text-center" style="color: red"><strong>
                                BUKUNYA BELUM SEMUA DITULIS, BARU SAMPAI MARET. MANGGA DILANJUTIN DARI APRIL SAMPE DESEMBER BAIK KOMIK MAUPUN NONKOMIK. GAMBARNYA ADA DI SINI <a href="https://www.dropbox.com/sh/za1xef9aw2u8p0i/AABd9ZWpilpDI3bsChbXlg3La?dl=0" target="_blank">https://www.dropbox.com/sh/za1xef9aw2u8p0i/AABd9ZWpilpDI3bsChbXlg3La?dl=0</a> ATAU DI REPOSITORY GITHUB <a href="https://github.com/arinalistyarini/visdat-taman-bacaan-interaktif" target="_blank">https://github.com/arinalistyarini/visdat-taman-bacaan-interaktif</a>. SAMA GAMBAR + DESKRIPSI JUGA<br><br><br><br>
                            </strong></div> -->
                            <div class="text-center changeableTitle" style="font-weight: bold">
                                SEPANJANG TAHUN 2015
                            </div>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 10px">
                        <div class="col-md-5 col-md-offset-1">
                            <select class="dropdown-filtering-terlaris-2015 col-md-6" style="padding: 0! important;">
                              <option value="sepanjangtahun" selected>Semua</option>
                              <option value="januari">Januari</option>
                              <option value="februari">Februari</option>
                              <option value="maret">Maret</option>
                              <option value="april">April</option>
                              <option value="mei">Mei</option>
                              <option value="juni">Juni</option>
                              <option value="juli">Juli</option>
                              <option value="agustus">Agustus</option>
                              <option value="september">September</option>
                              <option value="oktober">Oktober</option>
                              <option value="november">November</option>
                              <option value="desember">Desember</option>
                            </select>
                        </div>
                        <div class="col-md-5">
                            <form class="form-horizontal filter-komik-nonkomik">
                                <div class="form-group">
                                    <div class="col-lg-12" style="text-align: right">
                                        <label class="checkbox-inline">
                                            <input type="checkbox" class="input-komik"> Komik
                                        </label>
                                        <label class="checkbox-inline">
                                            <input type="checkbox" class="input-nonkomik"> Nonkomik
                                        </label>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="terlaris-2015">
                        <!-- SEPANJANG TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-2015.php' ?>

                        <!-- JANUARI TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-01-januari.php' ?>

                        <!-- FEBRUARI TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-02-februari.php' ?>

                        <!-- MARET TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-03-maret.php' ?>

                        <!-- APRIL TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-04-april.php' ?>

                        <!-- MEI TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-05-mei.php' ?>

                        <!-- JUNI TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-06-juni.php' ?>

                        <!-- JULI TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-07-juli.php' ?>

                        <!-- AGUSTUS TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-08-agustus.php' ?>

                        <!-- SEPTEMBER TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-09-september.php' ?>

                        <!-- OKTOBER TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-10-oktober.php' ?>

                        <!-- NOVEMBER TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-11-november.php' ?>

                        <!-- DESEMBER TAHUN 2015 -->
                        <?php include 'buku-pitimoss/buku-12-desember.php' ?>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-11 grid-center" style="padding-left: 0 !important; padding-right: 0 !important">
                <nav>
                  <ul class="pager">
                    <li class="previous"><a href="index.php" class="nav-btn-green"><i class="fa fa-angle-left" style="padding-right: 10px"></i> Tentang Pitimoss Fun Library</a></li>
                    <li class="next"><a href="transaksi-pitimoss.php" class="nav-btn-green">Transaksi peminjaman buku Pitimoss tahun 2015 <i class="fa fa-angle-right" style="padding-left: 10px"></i></a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>  
