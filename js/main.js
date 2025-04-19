/*------------------------------------------------------------
ハンバーガーメニュー
------------------------------------------------------------*/
// ハンバーガーメニューを開閉する<input id="drawer_input" type="checkbox" class="nav-unshown">を取得
const navInput = document.getElementById('drawer_input');

// ハンバーガーメニューの中、リンクタグを全部取得
const hamburgerLinks = document.querySelectorAll('.nav_list li a, .contact');

// メニュー外をクリックした場合にメニューを閉じる処理
document.addEventListener('click', function (event) {
    const navContent = document.querySelector('.nav_content');

    // navInputがチェックされている場合にのみ処理
    if (navInput.checked) {
        // メニュー外をクリックした場合
        if (!navContent.contains(event.target) && event.target !== navInput) {
            navInput.checked = false; // メニューを閉じる
        }
    }
});

// ハンバーガーメニュー内のリンクをクリックした場合にメニューを閉じる処理
hamburgerLinks.forEach(function (link) {
    link.addEventListener('click', function () {
        navInput.checked = false; // メニューを閉じる
    });
});



/*------------------------------------------------------------
ページTOPボタン
------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) { // スクロール位置が300pxを超えたら
            scrollToTopButton.classList.add('show'); // ボタンを表示
        } else {
            scrollToTopButton.classList.remove('show'); // ボタンを非表示
        }
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // スムーススクロール
        });
    });
});


/*------------------------------------------------------------
Swiper.js
------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.gallery__swiper', {
        slidesPerView: 2, // デフォルトの表示するスライド数
        spaceBetween: 0, // スライド間のスペース
        loop: true, // 無限ループ
        speed: 5000, // スライドの移動速度を遅めに設定
        autoplay: {
            delay: 0, // 遅延を0にして滑らかに続ける
            disableOnInteraction: false, // ユーザー操作後も自動再生を続ける
        },
        allowTouchMove: false, // ユーザー操作によるスライドを無効化
        breakpoints: {
            600: {
                slidesPerView: 4, // 幅600px以下で表示するスライド数を2に変更
            },
        },
    });

    // Autoplayを停止
    // swiper.autoplay.stop();
});


/*------------------------------------------------------------
fade-in.js - キャッチコピー
------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    // 3秒後にfade-inクラスを追加
    setTimeout(function () {
        const catchcopyBox = document.querySelector('.mv__catchcopy__box');
        if (catchcopyBox) {
            catchcopyBox.classList.add('fade-in');
            console.log('fade-inクラスが追加されました'); // 確認用
        } else {
            console.log('.mv__catchcopy__boxが見つかりませんでした'); // 確認用
        }
    }, 800); // 1000ミリ秒 = 1秒

    // 4秒後にrevealクラスを追加
    setTimeout(function () {
        const catchcopy = document.querySelector('.mv__catchcopy');
        if (catchcopy) {
            catchcopy.classList.add('reveal');
            console.log('revealクラスが追加されました'); // 確認用
        } else {
            console.log('.mv__catchcopyが見つかりませんでした'); // 確認用
        }
    }, 1500); // 1000ミリ秒 = 1秒
});


/*------------------------------------------------------------
スクロールJS
------------------------------------------------------------*/
document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTop');

    // ページのトップにスクロールするボタン
    scrollToTopButton.addEventListener('click', function () {
        smoothScroll(0, 250); トップにスクロール
    });

    // すべてのリンクにスムーズスクロールを適用
    const links = document.querySelectorAll('a[href^="#"]'); // ハッシュリンクを持つすべての<a>タグを取得
    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // デフォルトの動作を防ぐ
            const targetId = this.getAttribute('href'); // リンク先のIDを取得
            const targetElement = document.querySelector(targetId);

            // ターゲットが存在する場合のみスクロール
            if (targetElement) {
                const targetPosition = targetElement.offsetTop; // ターゲットの位置を取得
                smoothScroll(targetPosition, 250); // 全体スクロール
            }
        });
    });

    // スムーズスクロールの関数
    function smoothScroll(targetPosition, speed) {
        const currentPosition = window.scrollY; // 現在のスクロール位置
        const distance = targetPosition - currentPosition; // 移動距離

        // スクロールの開始時間
        const startTime = performance.now();

        function scroll() {
            const currentTime = performance.now();
            const timeElapsed = currentTime - startTime; // 経過時間
            const progress = Math.min(timeElapsed / speed, 1); // 進捗（0から1の値）

            // イージング関数（線形）
            const linearProgress = progress;

            // 現在の位置を更新
            window.scrollTo(0, currentPosition + distance * linearProgress);

            // スクロールが完了していない場合、次のフレームで続行
            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        }

        // スクロール開始
        requestAnimationFrame(scroll);
    }
});

/*------------------------------------------------------------
ヘッダー背景透明
------------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        // スクロール位置が100pxを超えたらクラスを追加、そうでなければ削除
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});
