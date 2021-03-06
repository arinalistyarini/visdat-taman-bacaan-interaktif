<?php $var = 3; include 'header.php'; ?>

<!-- Page Heading -->
<div class="row">
    <div class="col-lg-12">
        <div class="row">
            <div class="col-md-11 grid-center white-box">
                <div class="big-title">
                    <p style="float:left">
                        Pengembalian Buku <span class="smaller-title">Pitimoss Fun Library Tahun <span class="green-bold">2015</span></span>
                    </p>
                    <p style="float:right">
                        <a class="toggle-info hide-show-info-tepat-waktu-vs-terlambat"><i class="fa arrow-changeable fa-angle-up"></i></a>
                    </p>
                    <div style="clear: both;"></div>
                </div>
                <div class="info-content-tepat-waktu-vs-terlambat">
                    Berikut ini adalah perbandingan pengembalian buku yang tepat waktu dengan pengembalian buku yang terlambat:<br><br>

                    <div class="row">
                        <div class="col-md-9">

                            <div id="pengembalian-buku-chart-2-batang" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-garis" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-tepat-waktu" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-tepat-waktu-batang" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-tepat-waktu-garis" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-terlambat" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-terlambat-batang" class="pengembalian-buku-chart-2-size grid-center"></div>

                            <div id="pengembalian-buku-chart-2-terlambat-garis" class="pengembalian-buku-chart-2-size grid-center"></div>
                        </div>
                        <div class="col-md-3">
                            <form class="filter-update-2-radio">
                                <!-- <div class="radio">
                                  <label><input type="radio" name="jenisgrafik" class="input-pengembalian-buku-chart-2-batang-garis" value="batanggaris">Batang & Garis</label>
                                </div> -->
                                <label class="radio-inline">
                                    <input type="radio" name="jenisgrafik" class="input-pengembalian-buku-chart-2-batang" value="batang">
                                    <i class="fa fa-bar-chart icon-size-30" aria-hidden="true"></i>
                                </label>
                                <label class="radio-inline" style="margin-left: 18px !important;">
                                    <input type="radio" name="jenisgrafik" class="input-pengembalian-buku-chart-2-garis" value="garis">
                                    <i class="fa fa-line-chart icon-size-30" aria-hidden="true"></i>
                                </label>
                                <br>
                            </form>
                            <br>
                            <form class="filter-update-2">
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" class="input-pengembalian-buku-chart-2-tepat-waktu" value="tepatwaktu">
                                    Tepat Waktu
                                  </label>
                                </div>
                                <div class="checkbox">
                                  <label>
                                    <input type="checkbox" class="input-pengembalian-buku-chart-2-terlambat" value="terlambat">
                                    Terlambat
                                  </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-11 grid-center white-box white-box-last">
                <div class="big-title">
                    <p style="float:left">
                        Durasi Peminjaman <span class="smaller-title">Pitimoss Fun Library Tahun <span class="green-bold">2015</span></span>
                    </p>
                    <p style="float:right">
                        <a class="toggle-info hide-show-info-tepat-waktu-vs-terlambat"><i class="fa arrow-changeable fa-angle-up"></i></a>
                    </p>
                    <div style="clear: both;"></div>
                </div>
                <div class="info-content-tepat-waktu-vs-terlambat">
                    Berikut ini adalah rata-rata durasi peminjaman:<br><br>
                        
                    <div class="row">
                        <div class="col-md-9">
                            <div id="rata-rata-waktu-peminjaman-chart" class="rata-rata-waktu-peminjaman-chart-size grid-center"></div>
                            <div id="rata-rata-waktu-peminjaman-chart-inverse" class="rata-rata-waktu-peminjaman-chart-size grid-center"></div>
                        </div>
                        <div class="col-md-3">
                            Urutkan (berdasarkan jumlah peminjam):<br>
                            <form class="filter-urutan">
                                <div class="radio">
                                  <label>
                                    <input type="radio" name="urutanratarata" class="sort-ascending-ratarata" value="batang">Terbanyak ke Tersedikit
                                  </label>
                                </div>
                                <div class="radio">
                                  <label>
                                    <input type="radio" name="urutanratarata" class="sort-descending-ratarata" value="garis">Tersedikit ke Terbanyak
                                  </label>
                                </div>
                                <br>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-11 grid-center" style="padding-left: 0 !important; padding-right: 0 !important">
                <nav>
                  <ul class="pager">
                    <li class="previous"><a href="buku-pitimoss.php" class="nav-btn-green"><i class="fa fa-angle-left" style="padding-right: 10px"></i> Buku di Pitimoss tahun 2015</a></li>
                  </ul>
                </nav>
            </div>
        </div>
    </div>
</div>

<?php include 'footer.php'; ?>
